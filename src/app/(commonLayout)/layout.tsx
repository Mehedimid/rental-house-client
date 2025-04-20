import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";


const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="container mx-auto pb-24 ">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
