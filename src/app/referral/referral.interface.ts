export type ReferralUrgency = 'routine' | 'urgent' | 'emergency';

export type ReferralSource = 'self' | 'gp' | 'specialist' | 'other-doctor';

export type ReferralStatus = 'pending' | 'matched' | 'scheduled' | 'closed' | 'declined';

export type ReferralVisibility = 'public' | 'private' | 'shared-with-selected-doctors' | 'shared-with-departments';

export interface Referral {
	_id: string;
	userId: string;
	urgency: ReferralUrgency;
	requestedSpecialties: string[];
	source: ReferralSource;
	referringDoctorId: string | null;
	reason: string;
	symptoms: string;
	preferredDepartmentId: string | null;
	preferredFacilityId: string | null;
	preferredAppointmentDate: string;
	contactOptions: string[];
	expirationDate: string;
	visibility: ReferralVisibility;
	status: ReferralStatus;
}
