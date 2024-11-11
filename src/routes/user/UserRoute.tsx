import { Route, Routes } from "react-router-dom";
import BookDetails from "../../pages/user/BookDetails";
import Books from "../../pages/user/Books";
import Categories from "../../pages/user/Categories";
import Dashboard from "../../pages/user/Dashboard";
import Favourites from "../../pages/user/Favourites";
import Feedback from "../../pages/user/Feedback";
import MyLibrary from "../../pages/user/MyLibrary";
import Profile from "../../pages/user/Profile";

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