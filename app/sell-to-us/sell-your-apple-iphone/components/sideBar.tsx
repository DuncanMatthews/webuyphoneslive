type iPhoneModel =
  | 'iPhone 13'
  | 'iPhone 13 Pro'
  | 'iPhone 13 Pro Max'
  | 'iPhone 13 mini'
  | 'iPhone 12'
  | 'iPhone 12 Pro'
  | 'iPhone 12 Pro Max'
  | 'iPhone 12 mini'
  | 'iPhone 11'
  | 'iPhone 11 Pro'
  | 'iPhone 11 Pro Max'
  | 'iPhone SE (2nd generation)'
  | 'iPhone SE (1st generation)'
  | 'iPhone XR'
  | 'iPhone XS'
  | 'iPhone XS Max'
  | 'iPhone X'
  | 'iPhone 8'
  | 'iPhone 8 Plus';

interface SideBarProps {
  selectediPhoneModel: iPhoneModel | null;
  selectediPhoneStorage: string | null;
  selectediPhoneColor: string | null;
  selectediPhoneCondition: string | null;
}

export default function SideBar({
  selectediPhoneModel,
  selectediPhoneStorage,
  selectediPhoneColor,
  selectediPhoneCondition
}: SideBarProps) {
  return (
    <div className="absolute bottom-0 left-0 top-[8.7rem] z-40 hidden min-h-[1800px] w-[350px] bg-white shadow-xl md:block">
      <div className="relative overflow-scroll px-6	   py-8">
        {selectediPhoneModel && (
          <div className="flex flex-col justify-center p-6">
            <div className="mx-auto mt-10 w-full">
              <div className="rounded-lg border bg-white p-5 shadow-md">
                <div className="my-4 flex items-center justify-between">
                  <span className="font-light text-gray-600">Model</span>
                  <span className="font-semibold text-gray-800">{selectediPhoneModel}</span>
                </div>

                {selectediPhoneStorage && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Storage</span>
                      <span className="font-semibold text-gray-800">{selectediPhoneStorage}</span>
                    </div>
                  </>
                )}
                {selectediPhoneColor && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Color</span>
                      <span className="font-semibold text-gray-800">{selectediPhoneColor}</span>
                    </div>
                  </>
                )}
                {selectediPhoneCondition && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Condition</span>
                      <span className="font-semibold text-gray-800">{selectediPhoneCondition}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sidebar Footer */}
        <div className="mt-auto p-6"></div>
      </div>
    </div>
  );
}
