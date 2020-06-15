import { CustomMap, mapOptions } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap(`map`, mapOptions);

customMap.addMarker(user);
customMap.addMarker(company);