/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


const RentedHouses = async () => {
    const rentData = [
        {
          _id: "1",
          landlordId: {
            heading: "Modern Family House in Gulshan",
            rentRange: "$1200",
            salaryRange: "$1500",
            name: "Rakibul Hasan",
            email: "rakib@example.com",
            phone: "01812345678",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            photoURL: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          paymentStatus: "Paid",
        },
        {
          _id: "2",
          landlordId: {
            heading: "Luxury Apartment in Dhanmondi",
            rentRange: "$1500",
            salaryRange: "$1800",
            name: "Amina Sultana",
            email: "amina@example.com",
            phone: "01798765432",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            photoURL: "https://randomuser.me/api/portraits/women/44.jpg",
          },
          paymentStatus: "Pending",
        },
        {
          _id: "3",
          landlordId: {
            heading: "Cozy Studio in Banani",
            rentRange: "$900",
            salaryRange: "$1100",
            name: "Tanvir Alam",
            email: "tanvir@example.com",
            phone: "01611223344",
            image: "",
            photoURL: "",
          },
          paymentStatus: "Paid",
        },
      ];
      


  return (
    <div>
      <h1 className="text-2xl font-bold text-center lg:text-3xl">
        Rented Houses
      </h1>
      <div className="overflow-x-auto rounded-2xl border border-gray-300 my-5">
        <table className="min-w-full border border-gray-300 bg-white rounded-3xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Heading</th>
              <th className="border p-3 text-left">Rent Per Month</th>
              <th className="border p-3 text-center">Landlord</th>
              <th className="border p-3 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {rentData?.map((item:any) => (
              <tr key={item._id} className="border">
                <td className="border p-3">{item?.landlordId?.heading}</td>
                <td className="border p-3">{item?.landlordId?.rentRange}</td>
                <td className="border p-3 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="rounded-full">Landord Info</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] p-4">
                      <DialogHeader>
                        <DialogTitle className="text-center">
                          Landlord Profile
                        </DialogTitle>
                      </DialogHeader>
                      <div className="text-center mx-auto">
                        <Avatar className="h-16 w-16 mx-auto">
                          <AvatarImage
                            src={
                              item?.landlordId?.image ||
                              "https://github.com/shadcn.png"
                            }
                          />
                          <AvatarFallback>Landlord</AvatarFallback>
                        </Avatar>
                        <p>
                          <span className="font-bold">Name:</span>{" "}
                          {item?.landlordId?.name || "N/A"}
                        </p>
                        <p>
                          <span className="font-bold">Email:</span>{" "}
                          {item?.landlordId?.email || "N/A"}
                        </p>
                        <p>
                          <span className="font-bold">Phone:</span>{" "}
                          {item?.landlordId?.phone || "N/A"}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </td>

                <td className="border p-3 text-center">{item?.paymentStatus}</td>
               
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default RentedHouses;
