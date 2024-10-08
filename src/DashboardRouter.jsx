import DashboardLayout from "./components/Dashboard-layouts/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddCriticism from "./pages/AddCriticism/AddCriticism";
import { Routes, Route } from "react-router-dom";
import ResponseList from "./pages/Responses/ResponseList";
import Answer from "./pages/Answer/Answer";

const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        {/* صفحات دیگر را اضافه کنید */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-criticism" element={<AddCriticism />} />
        <Route path="/response-list/:id" element={<ResponseList />} />
        <Route path="answer" element={<Answer />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRouter;
