
import DashboardLayout from "./components/Dashboard-layouts/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom"
const DashboardRouter = () => {
  return (
    <>
      {/* <DashboardLayout /> */}
      <DashboardLayout>
        
      <Routes>
        {/* صفحات دیگر را اضافه کنید */}
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </DashboardLayout>
      {/* <Dashboard /> */}
      {/* <Sidebar /> */}
    </>
  );
};

export default DashboardRouter;
