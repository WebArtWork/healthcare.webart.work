import { Agency } from '../agency/agency.interface';
import { agencies } from '../agency/agency.data';
import { Agent } from '../agent/agent.interface';
import { agents } from '../agent/agent.data';
import { Complex } from '../complex/complex.interface';
import { complexes } from '../complex/complex.data';
import { Developer } from '../developer/developer.interface';
import { developers } from '../developer/developer.data';
import { Listing } from '../listing/listing.interface';
import { listings } from '../listing/listing.data';
import { PropertyRecord } from '../record/record.interface';
import { records } from '../record/record.data';
import { EntityComment } from '../comment/comment.interface';
import { comments } from '../comment/comment.data';
import { Property } from './property.interface';

/**
 * A property's related entities: it carries the authoritative
 * complexId/developerId/agencyId/agentId directly, plus arrays of ids
 * pointing at its own listings/records/comments — this resolves all of
 * them so the property detail page can show (and link to) its full
 * "digital passport" instead of raw ids.
 */
export interface PropertyRelations {
	complex: Complex | null;
	developer: Developer | null;
	agency: Agency | null;
	agent: Agent | null;
	listings: Listing[];
	records: PropertyRecord[];
	comments: EntityComment[];
}

const _complexById = new Map<string, Complex>(complexes.map((c) => [c._id, c]));
const _developerById = new Map<string, Developer>(developers.map((d) => [d._id, d]));
const _agencyById = new Map<string, Agency>(agencies.map((a) => [a._id, a]));
const _agentById = new Map<string, Agent>(agents.map((a) => [a._id, a]));
const _listingById = new Map<string, Listing>(listings.map((l) => [l._id, l]));
const _recordById = new Map<string, PropertyRecord>(records.map((r) => [r._id, r]));
const _commentById = new Map<string, EntityComment>(comments.map((c) => [c._id, c]));

export function relationsForProperty(property: Property): PropertyRelations {
	return {
		complex: property.complexId ? (_complexById.get(property.complexId) ?? null) : null,
		developer: property.developerId ? (_developerById.get(property.developerId) ?? null) : null,
		agency: property.agencyId ? (_agencyById.get(property.agencyId) ?? null) : null,
		agent: property.agentId ? (_agentById.get(property.agentId) ?? null) : null,
		listings: property.listingIds
			.map((id) => _listingById.get(id))
			.filter((l): l is Listing => !!l),
		records: property.recordIds
			.map((id) => _recordById.get(id))
			.filter((r): r is PropertyRecord => !!r),
		comments: property.commentIds
			.map((id) => _commentById.get(id))
			.filter((c): c is EntityComment => !!c),
	};
}
