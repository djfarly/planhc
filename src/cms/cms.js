import CMS from 'netlify-cms';

import TextPagePreview from './preview-templates/TextPagePreview';
import ProjektPreview from './preview-templates/ProjektPreview';

CMS.registerPreviewTemplate('impressum', TextPagePreview);
CMS.registerPreviewTemplate('projekte', ProjektPreview);
