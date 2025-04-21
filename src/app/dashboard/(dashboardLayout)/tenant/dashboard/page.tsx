/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  Cell,
  XAxis,
  YAxis,
} from "recharts";

// Pie Chart Data (Course Completion Status)
const pieData = [
  { name: "Completed", value: 8 },
  { name: "In Progress", value: 4 },
  { name: "Pending", value: 3 },
];

const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

// Bar Chart Data (House Rent Spent Over Time)
const barData = [
  { name: 2025, cost: 20000 },
  { name: 2026, cost: 30000 },
  { name: 2027, cost: 40000 },
  { name: 2028, cost: 60000 },
  { name: 2029, cost: 50000 },
];

// Line Chart Data (Costing Progress)
const progressData = [
  { year: 2025, progress: 30 },
  { year: 2026, progress: 45 },
  { year: 2027, progress: 60 },
  { year: 2028, progress: 80 },
  { year: 2029, progress: 95 },
];

// New Feature: Room decoration
const categoryData = [
  { name: "Furnished room", value: 5 },
  { name: "Large Corridor", value: 3 },
  { name: "Gym", value: 4 },
];

// New Feature: Weekly Study Hours
const loadShedingHoursData = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 4 },
  { day: "Thu", hours: 2 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 1 },
  { day: "Sun", hours: 3 },
];

export default function TenantDashboard() {
  const [houseRent, setHouseRent] = useState<any[]>([]);
  const [needHouse, setNeedHouse] = useState<any[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const user = await getCurrentUser();
  //       const currentUser: {
  //         _id: number
  //         name: string;
  //         email: string;
  //         photoURL: string;
          
  //       } = {
  //         _id:1,
  //         name: "Admin Name",
  //         email: "admin@example.com",
  //         photoURL: "/default-avatar.png",
          
  //       };
  //       // const { data: allUserData } = await getAllUser();
  //       // const currentUser = allUserData?.find(
  //       //   (singleUser: TGetAllUsers) => singleUser?.email === user?.email
  //       // );

  //       // console.log(currentUser);
  //       if (currentUser?._id) {
  //         const [houseRent, needHouse] = await Promise.all([
  //           // tenantRentHouse(currentUser?._id),
  //         ]);

  //         setHouseRent(houseRent?.data);
  //         setNeedHouse(needHouse?.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } 
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = {
          _id: 1,
          name: "Demo Tenant",
          email: "tenant@example.com",
          photoURL: "/default-avatar.png",
        };
  
        // ✅ Simulate dummy rent data
        const dummyHouseRent = [
          {
            rentId: { spent: 10000 },
          },
          {
            rentId: { spent: 15000 },
          },
        ];
  
        const dummyNeedHouse = [
          {
            rentId: { spentRange: 5000 },
          },
          {
            rentId: { spentRange: 7000 },
          },
        ];
  
        if (currentUser?._id) {
          // Simulating async fetch with setTimeout
          setTimeout(() => {
            setHouseRent(dummyHouseRent);
            setNeedHouse(dummyNeedHouse);
          }, 500); // small delay to simulate real API
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  


  const totalHouseRent = houseRent.reduce((sum, rent) => {
    return sum + Number(rent.rentId.spent);
  }, 0);
  const totalHouseRentSpent = needHouse.reduce((sum, rent) => {
    return sum + Number(rent.rentId.spentRange);
  }, 0);






  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Tenant Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              List of Rent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">{houseRent?.length + needHouse?.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600">{totalHouseRent+totalHouseRentSpent} BDT</p>
          </CardContent>
        </Card>

        
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              House Rent Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              Rent Increase Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="courses" fill="#4CAF50" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Line Chart */}
      <div className="mt-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              Yearly Costing Increases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <XAxis dataKey="month" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#FF5722"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Course Categories Stats */}
      <div className="mt-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              House Facility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Study Hours Bar Chart */}
      <div className="mt-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">
              Weekly Loadsheding Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loadShedingHoursData}>
                <XAxis dataKey="day" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#007BFF" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
