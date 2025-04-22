import ManageApplyTable from "@/components/module/request-rent/ManageApplyTable";

import React from "react";

const RequestRent = async () => {
//   const user = await getCurrentUser();

//   const { data } = await getAllUser();


//   const currentUser = await data?.find(
//     (oneUser: TGetAllUsers) => oneUser?.email === user?.email
//   );

//   //   console.log(currentUser);

//   const { data: appliedData } = await getStudentApply(currentUser?._id);
// //   console.log(appliedData);

  //   console.log(currentUser);
  const rentData = [
    {
      _id: "1",
      rentId: {
        heading: "Lorem ipsum dolor sit, amet consectetur",
        rentRange: "1200000",
      },
      landlordId: {
        name: "Rakibul Hasan",
        email: "rakib@example.com",
        phone: "01812345678",
        photoURL: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      selectStatus: "Selected",
      paymentStatus: "Not_Pay",
    },
    {
      _id: "2",
      rentId: {
        heading: "Lorem ipsum dolor sit, amet consectetur",
        rentRange: "1500000",
      },
      landlordId: {
        name: "Amina Sultana",
        email: "amina@example.com",
        phone: "01798765432",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      selectStatus: "Selected",
      paymentStatus: "Done",
    },
    {
      _id: "3",
      rentId: {
        heading: "Lorem ipsum dolor sit, amet consectetur",
        rentRange: "10000",
      },
      landlordId: {
        name: "Nayeem Islam",
        email: "nayeem@example.com",
        phone: "01611223344",
        image: "",
      },
      selectStatus: "Pending",
      paymentStatus: "Not_Pay",
    },
  ];
  
  return (
    <div>
      <h1 className="text-center font-bold text-2xl lg:text-3xl my-5">Manage Your Apply</h1>
  {/* console.log(appliedData); */}
      <ManageApplyTable rentData={rentData}/>
    </div>
  );
};

export default RequestRent;
