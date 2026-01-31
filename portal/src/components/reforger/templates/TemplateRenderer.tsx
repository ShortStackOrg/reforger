import { TemplateId } from '@/types/resume';
import BoldTemplate from './BoldTemplate';
import CreativeTemplate from './CreativeTemplate';
import ModernTemplate from './ModernTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';

type TemplateRendererProps = {
  templateId: TemplateId;
};

const TemplateRenderer = ({ templateId }: TemplateRendererProps) => {
  switch (templateId) {
    case 'creative':
      return <CreativeTemplate />;
    case 'bold':
      return <BoldTemplate />;
    case 'modern':
      return <ModernTemplate />;
    case 'professional':
    default:
      return <ProfessionalTemplate />;
  }
};

export default TemplateRenderer;
