import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import AddBook from "../pages/AddBook";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Copies from "../pages/Copies";
import ExtensionRequest from "../pages/ExtensionRequest";
import Feedback from "../pages/Feedback";
import Borrowings from "../pages/Borrowings";
import UserPage from "../pages/UserPage";

function AdminRoute() {
    return (
        <Routes>
            <Route path='/addBook' element={<AddBook/>}/>
            <Route path='/bookDetails' element={<BookDetails/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/borrowings' element={<Borrowings/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/copies' element={<Copies/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/extensionRequests' element={<ExtensionRequest/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/userPage' element={<UserPage/>}/>
        </Routes>
    )
}

export default AdminRoute;