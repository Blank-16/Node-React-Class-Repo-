
function Dominoz() {


    return (
        <>
            <div>
                <nav className="flex justify-evenly items-center p-4">
                    <div>
                        <img className="w-20" src="img1.png"></img>
                    </div>
                    <div>
                        <button className="bg-amber-50 text-blue-500 mx-4">OUR MENU</button>
                        <button className="bg-amber-50 text-blue-500 mx-4">DOMINO'S STORES</button>
                        <button className="bg-amber-50 text-blue-500 mx-4">GIFT CARDS</button>
                        <button className="bg-amber-50 text-blue-500 mx-4">CORPORATE ENQUIRY</button>
                        <button className="bg-amber-50 text-blue-500 mx-4">CONTACT</button>
                    </div>
                    <div className="bg-red-400 p-4 rounded border">
                        <button>DOWNLOAD APP</button>
                    </div>
                </nav>
            </div>
            <div className="bg-blue-400 px-80">
                <img className="w-200" src="img2.png"></img>
            </div>
            <h2 className="text-2xl text-black">COUPONS $ OFFERS</h2>
            <div className="flex justify-evenly items-center p-4">
                <img src="img3.jpg" className="w-100"></img>
                <img src="img4.jpg" className="w-100"></img>


            </div>
            <div class="flex flex-wrap justify-center gap-6 p-4">

                <div class="bg-white shadow-md rounded-lg p-10 w-72">
                    <h2 class="text-xl font-semibold mb-2">Card Title 1</h2>
                    <p class="text-gray-600">This is the content of the first card.</p>
                </div>


                <div class="bg-white shadow-md rounded-lg p-6 w-72">
                    <h2 class="text-xl font-semibold mb-2">Card Title 2</h2>
                    <p class="text-gray-600">This is the content of the second card.</p>
                </div>


                <div class="bg-white shadow-md rounded-lg p-6 w-72">
                    <h2 class="text-xl font-semibold mb-2">Card Title 3</h2>
                    <p class="text-gray-600">This is the content of the third card.</p>
                </div>
            </div>



        </>
    )
}

export default Dominoz