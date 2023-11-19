'use client';

import { useState } from 'react';
import SellPhone from '../sell-your-apple-iphone/components/sellIPhone';

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

const IphonePage = () => {
  const [selectediPhoneModel, setselectediPhoneModel] = useState<iPhoneModel | null>(null);
  const [selectediPhoneStorage, setselectediPhoneStorage] = useState<string | null>(null);
  const [selectediPhoneColor, setselectediPhoneColor] = useState<string | null>(null);
  const [selectediPhoneCondition, setselectediPhoneCondition] = useState<string | null>(null);
  return (
    <div>
      <SellPhone
        selectediPhoneModel={selectediPhoneModel}
        setselectediPhoneModel={setselectediPhoneModel}
        selectediPhoneColor={selectediPhoneColor}
        setselectediPhoneColor={setselectediPhoneColor}
        selectediPhoneStorage={selectediPhoneStorage}
        setselectediPhoneStorage={setselectediPhoneStorage}
        selectediPhoneCondition={selectediPhoneCondition}
        setselectediPhoneCondition={setselectediPhoneCondition}
      />
    </div>
  );
};

export default IphonePage;
