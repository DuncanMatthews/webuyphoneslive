function DropdownMenu() {
  return (
    <div className="absolute z-40 flex w-full transform	 border bg-white shadow-lg transition  duration-1000  ease-in-out">
      {/* Section 1 */}
      <div className="container my-5 flex">
        <div className="flex-1 p-4 ">
          <p className="mb-4 font-semibold">Explore Mac</p>
          <ul>
            <li className="mb-1 text-2xl">MacBook Air</li>
            <li className="mb-1 text-2xl">MacBook Pro</li>
            <li className="mb-1 text-2xl">iMac</li>
            <li className="mb-1 text-2xl">Mac mini</li>
            <li className="mb-1 text-2xl">Mac Studio</li>
            <li className="mb-1 text-2xl">Mac Pro</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="flex-1 p-4">
          <p className="mb-4 font-semibold">Shop Mac</p>
          <ul>
            <li className="mb-1 text-2xl">Mac Accessories</li>
            <li className="mb-1 text-2xl">Apple Trade In</li>
            <li>Financing</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="flex-1 p-4">
          <p className="mb-4 font-semibold">More from Mac</p>
          <ul>
            <li className="mb-1 text-2xl">Mac Support</li>
            <li className="mb-1 text-2xl">AppleCare+ for Mac</li>
            <li className="mb-1 text-2xl">macOS Sonoma</li>
            <li className="mb-1 text-2xl">Apps by Apple</li>
            <li className="mb-1 text-2xl">Continuity</li>
            <li className="mb-1 text-2xl">iCloud+</li>
            <li className="mb-1 text-2xl">Mac for Business</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
