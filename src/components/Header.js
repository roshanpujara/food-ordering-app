import logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <>
    
      <div className="flex justify-between border">
        
        <div className="w-40 flex items-center justify-center">
        <a className="font-display text-yellow-500" href="#">FOODMANDU</a>
        </div>   
        <ul className="flex m-10">
        <li className="px-5">Home</li>
        <li className="px-5">About</li>
        <li className="px-5">Contact</li>
        <li className="px-5">Instamart</li>
        <li className="px-5">Cart</li>
        </ul> 
      </div>
      
    </>
  );
};
export default Header;
