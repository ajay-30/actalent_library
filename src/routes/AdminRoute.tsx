import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin_librarian_pages/Dashboard";
import Categories from "../pages/admin_librarian_pages/Categories";
import AddBook from "../pages/admin_librarian_pages/AddBook";
import Books from "../pages/admin_librarian_pages/Books";
import BookDetails from "../pages/admin_librarian_pages/BookDetails";
import Copies from "../pages/admin_librarian_pages/Copies";
import ExtensionRequest from "../pages/admin_librarian_pages/ExtensionRequest";
import Feedback from "../pages/admin_librarian_pages/Feedback";
import Borrowings from "../pages/admin_librarian_pages/Borrowings";
import UserPage from "../pages/admin_librarian_pages/UserPage";

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