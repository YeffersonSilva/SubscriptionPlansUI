import { cn } from '@/libs/utils';

interface HeaderPricingProps {
  plano: string;
  onClickMensal: () => void;
  onClickAnual: () => void;
}

const HeaderPricing = ({
  plano,
  onClickMensal,
  onClickAnual,
}: HeaderPricingProps) => {
  return (
    <ul
      className={cn(
        'relative p-2 bg-gray-950 text-white flex items-center rounded-full before:absolute before:top-1/2 before:w-1/2 before:h-[86%] before:-translate-y-1/2 before:bg-primary before:rounded-full transition-all duration-300 before:transition-all before:duration-300',
        plano === 'mensal' ? 'before:left-1' : 'before:left-[84px]'
      )}
    >
      <li>
        <button
          onClick={onClickMensal}
          className={cn(
            'w-20 h-12 rounded-full relative z-10',
            plano === 'mensal' && ''
          )}
        >
          Mensal
        </button>
      </li>
      <li>
        <button
          onClick={onClickAnual}
          className={cn(
            'w-20 h-12 rounded-full relative z-10',
            plano === 'anual' && ''
          )}
        >
          Anual
        </button>
      </li>
    </ul>
  );
};

export default HeaderPricing;
