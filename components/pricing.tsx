'use client';

import HeaderPricing from '@/components/header-pricing';
import ListPricing from '@/components/list-pricing';
import { useState } from 'react';

const Pricing = () => {
  const [plano, setPlano] = useState('mensal');

  return (
    <div className='flex flex-col gap-10 items-center justify-center min-h-screen'>
      <HeaderPricing
        plano={plano}
        onClickMensal={() => setPlano('mensal')}
        onClickAnual={() => setPlano('anual')}
      />
      <ListPricing plano={plano} />
    </div>
  );
};

export default Pricing;
