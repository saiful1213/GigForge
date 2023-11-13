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
            element: <Add_Job></Add_Job>
         },
         {
            path: "posted-job",
            element: <Posted_job></Posted_job>,
         },
         {
            path: "my-bid",
            element: <My_Bids></My_Bids>
         },
         {
            path: "bid-request",
            element: <Bid_Request></Bid_Request>
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
            element: <Job_Detail></Job_Detail>,
            loader: ({params})=> fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
         },
         {
            path: 'Posted-job/update/:id',
            element: <UpdateJob></UpdateJob>,
            loader: ({params}) => fetch(`http://localhost:5000/api/v1/jobs/update/${params.id}`)
         }
      ]
   }
])

export default Routes;