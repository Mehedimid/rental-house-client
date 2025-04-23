"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import SecondaryButton from "@/components/shared/SecondaryButton";
import Link from "next/link";

const UpdateProfileForm = () => {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("tenant");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setEmail(session.user.email || "");
      setPhone(session.user.phone || "");
      setRole(session.user.role || "tenant");
    }
  }, [session]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = session?.user?.imageUrl || "";

    // 1. Upload image to Cloudinary if new image selected
    if (imageFile) {
      const cloudinaryData = new FormData();
      cloudinaryData.append("file", imageFile);
      cloudinaryData.append("upload_preset", "tahmid123");
      cloudinaryData.append("cloud_name", "dfvvoq4ud");

      try {
        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/dfvvoq4ud/image/upload",
          {
            method: "POST",
            body: cloudinaryData,
          }
        );
        const cloudinaryResult = await cloudinaryRes.json();
        imageUrl = cloudinaryResult.secure_url;
      } catch (err) {
        console.error("Cloudinary upload failed:", err);
        alert("Image upload failed");
        return;
      }
    }

    // 2. Send update payload to backend
    const payload = {
      name,
      email,
      phone,
      role,
      imageUrl,
    };

    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/user`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        alert("Profile updated successfully!");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Update failed:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Update failed");
      } else {
        console.error("Unexpected error:", err);
        alert("Something went wrong");
      }
    }
  };

  if (status === "loading") return <div>Loading...</div>;
  if (!session?.user) return <div>You need to log in</div>;

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="flex flex-col gap-6 w-full max-w-md p-8 border-2 border-white shadow-theme">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Update Profile</h1>
          <p className="text-secondary mt-2">Edit your account information</p>
        </div>

        <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 focus:border-secondary outline-none p-3 w-full text-sm placeholder-secondary"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-secondary outline-none p-3 w-full text-sm placeholder-secondary"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{11,}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 focus:border-secondary outline-none p-3 w-full text-sm placeholder-secondary"
          />

          <div className="relative">
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <label
              htmlFor="image"
              className="border border-gray-300 focus:border-secondary outline-none p-3 w-full text-sm text-secondary cursor-pointer flex justify-start"
            >
              {imageFile ? imageFile.name : "Choose Image"}
            </label>
          </div>

          <div className="flex items-center gap-4 text-secondary">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="tenant"
                checked={role === "tenant"}
                onChange={() => setRole("tenant")}
              />
              Tenant
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="landlord"
                checked={role === "landlord"}
                onChange={() => setRole("landlord")}
              />
              Landlord
            </label>
          </div>

          <SecondaryButton
            type="submit"
            customClass="w-full py-3 px-4 bg-green-600 text-white hover:bg-green-700"
          >
            Update Info
          </SecondaryButton>

          <div className="text-center text-sm mt-4">
            Want to go back?{" "}
            <Link href="/dashboard" className="underline underline-offset-4 text-secondary">
              Dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
