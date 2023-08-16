import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./views/DashBoard";
import ItenStock from "./views/ItensStock";
import AddItem from "./components/AddItem";
import StockLayout from "./views/StockLayout";
import DescriptionItem from "./components/DescriptionItem";
import DashBoardLayout from "./views/DashBoardLayout";
import EditItem from "./components/EditItem";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoardLayout/>,
    children: [{
      index: true,
      element: <DashBoard />
    }]
  },
  {
    path: '/stockItems',
    element: <StockLayout />,
    children: [
      {
        index: true,
        element: <ItenStock />
      }, {
        path:':idItem',
        element: <DescriptionItem />,
        errorElement: <ItenStock />
      }, {
        path: 'addItem',
        element: <AddItem />
      }, {
        path: 'editItem/:idItem',
        element: <EditItem />
      }
    ]
  }])

export default router