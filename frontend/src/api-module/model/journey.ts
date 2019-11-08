/**
 * Footprint API
 * API for calculating your Carbon footprint
 *
 * OpenAPI spec version: 0.1.0
 * Contact: apiteam@codefor.nl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Person } from './person';
import { Travel } from './travel';


export interface Journey { 
    id?: number;
    description?: string;
    person?: Person;
    travels?: Array<Travel>;
}
