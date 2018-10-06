import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ProjectPreview from './preview-templates/ProjectPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('projects', ProjectPreview);
