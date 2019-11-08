export * from './journey.service';
import { JourneyService } from './journey.service';
export * from './person.service';
import { PersonService } from './person.service';
export * from './travel.service';
import { TravelService } from './travel.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [JourneyService, PersonService, TravelService, UserService];
