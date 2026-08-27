export type AppointmentType = 'consultation' | 'procedure' | 'follow-up' | 'emergency' | 'screening' | 'other';

export type AppointmentStatus =
	| 'draft'
	| 'pending-confirmation'
	| 'scheduled'
	| 'checked-in'
	| 'completed'
	| 'cancelled'
	| 'no-show'
	| 'rescheduled';

export type AppointmentAttendeeRole = 'patient' | 'doctor' | 'department-rep' | 'network-rep' | 'vaelmont-team';

export interface AppointmentAttendee {
	userId: string;
	role: AppointmentAttendeeRole;
}

export interface Appointment {
	_id: string;
	patientId: string;
	doctorId: string;
	departmentId: string;
	facilityId: string;
	appointmentType: AppointmentType;
	title: string;
	description: string;
	scheduledDate: string;
	scheduledTime: string;
	durationMinutes: number;
	recurrence: 'one-time' | 'weekly' | 'monthly' | null;
	location: string;
	attachments: string[];
	creatorUserId: string;
	attendee: AppointmentAttendee;
	contactOptions: string[];
	bookingDate: string;
	cancelBy: string | null;
	status: AppointmentStatus;
	confirmed: boolean;
}
