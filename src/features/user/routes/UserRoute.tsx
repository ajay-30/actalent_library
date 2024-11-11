import { Route, Routes } from "react-router-dom";
import BookDetails from "../user_pages/BookDetails";
import Books from "../user_pages/Books";
import Categories from "../user_pages/Categories";
import Dashboard from "../user_pages/Dashboard";
import Favourites from "../user_pages/Favourites";
import Feedback from "../user_pages/Feedback";
import MyLibrary from "../user_pages/MyLibrary";
import Profile from "../user_pages/Profile";

function UserRoute() {
    return (
        <Routes>
            <Route path="/bookDetails" element={<BookDetails/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/myLibrary" element={<MyLibrary/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}

export default UserRoute;