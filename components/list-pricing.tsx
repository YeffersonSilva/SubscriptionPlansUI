import {
  featuresAdvanced,
  featuresBasic,
  featuresBusiness,
} from '@/assets/data';
import PricingCard from '@/components/pricing-card';

interface ListPricingProps {
  plano: string;
}

const ListPricing = ({ plano }: ListPricingProps) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <li>
        <PricingCard
          plano='Básico'
          preco={plano === 'mensal' ? 240 : 190}
          descricao='Melhor para uso pessoal'
          caracteristicas={featuresBasic}
        />
      </li>
      <li>
        <PricingCard
          plano='Avançado'
          preco={plano === 'mensal' ? 360 : 260}
          descricao='Melhor para profissionais'
          caracteristicas={featuresAdvanced}
          ativo
        />
      </li>
      <li>
        <PricingCard
          plano='Empresarial'
          preco={plano === 'mensal' ? 520 : 490}
          descricao='Melhor para empresas'
          caracteristicas={featuresBusiness}
        />
      </li>
    </ul>
  );
};

export default ListPricing;
