import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Add_Job from "../pages/Add_Job/Add_Job"
import Posted_job from "../pages/Posted_job/Posted_job"
import My_Bids from "../pages/My_Bids/My_Bids"
import Bid_Request from "../pages/Bid_Request/Bid_Request"
import Root from "../Root/Root";
import Job_Detail from "../pages/Job_Detail/Job_Detail";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "add-job",
            element: <PrivateRoute><Add_Job></Add_Job></PrivateRoute>
         },
         {
            path: "posted-job",
            element: <PrivateRoute><Posted_job></Posted_job></PrivateRoute>,
         },
         {
            path: "my-bid",
            element: <PrivateRoute><My_Bids></My_Bids></PrivateRoute>,
         },
         {
            path: "bid-request",
            element: <PrivateRoute><Bid_Request></Bid_Request></PrivateRoute>,
            loader: ()=> fetch('https://gig-forge-server.vercel.app/api/v1/bid_info')
         },
         {
            path: "login",
            element: <Login></Login>
         },
         {
            path: "register",
            element: <Register></Register>
         },
         {
            path: 'job_detail/:id',
            element: <PrivateRoute><Job_Detail></Job_Detail></PrivateRoute>,
            loader: ({params})=> fetch(`https://gig-forge-server.vercel.app/api/v1/jobs/${params.id}`)
         },
         {
            path: 'Posted-job/update/:id',
            element: <UpdateJob></UpdateJob>,
            loader: ({params}) => fetch(`https://gig-forge-server.vercel.app/api/v1/jobs/update/${params.id}`)
         }
      ]
   }
])

export default Routes;