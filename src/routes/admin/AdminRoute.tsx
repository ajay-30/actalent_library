import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";
import Categories from "../../pages/admin/Categories";
import AddBook from "../../pages/admin/AddBook";
import Books from "../../pages/admin/Books";
import BookDetails from "../../pages/admin/BookDetails";
import Copies from "../../pages/admin/Copies";
import ExtensionRequest from "../../pages/admin/ExtensionRequest";
import Feedback from "../../pages/admin/Feedback";
import Borrowings from "../../pages/admin/Borrowings";
import UserPage from "../../pages/admin/UserPage";

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