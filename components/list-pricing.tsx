// Importing the feature sets for different pricing plans and the PricingCard component
import {
  featuresAdvanced,
  featuresBasic,
  featuresBusiness,
} from '@/assets/data';
import PricingCard from '@/components/pricing-card';

// Interface defining the props for the ListPricing component
interface ListPricingProps {
  plano: string; // 'plano' represents the currently selected plan type ('mensal' or 'anual')
}

// ListPricing component that displays pricing cards based on the selected plan
const ListPricing = ({ plano }: ListPricingProps) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {/* Pricing card for Basic plan */}
      <li>
        <PricingCard
          plano='Básico' // Plan name for the Basic pricing option
          preco={plano === 'mensal' ? 240 : 190} // Price based on the selected plan type
          descricao='Melhor para uso pessoal' // Description of the Basic plan
          caracteristicas={featuresBasic} // Features for the Basic plan
        />
      </li>
      {/* Pricing card for Advanced plan */}
      <li>
        <PricingCard
          plano='Avançado' // Plan name for the Advanced pricing option
          preco={plano === 'mensal' ? 360 : 260} // Price based on the selected plan type
          descricao='Melhor para profissionais' // Description of the Advanced plan
          caracteristicas={featuresAdvanced} // Features for the Advanced plan
          ativo // Indicates that this plan is currently active or highlighted
        />
      </li>
      {/* Pricing card for Business plan */}
      <li>
        <PricingCard
          plano='Empresarial' // Plan name for the Business pricing option
          preco={plano === 'mensal' ? 520 : 490} // Price based on the selected plan type
          descricao='Melhor para empresas' // Description of the Business plan
          caracteristicas={featuresBusiness} // Features for the Business plan
        />
      </li>
    </ul>
  );
};

// Exporting the ListPricing component as the default export
export default ListPricing;
