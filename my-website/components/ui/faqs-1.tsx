import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqsSection() {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-8 px-4">
			<div className="space-y-3 text-center">
				<h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Know</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Common questions from operators, safety managers, and procurement teams. If you don&apos;t
					find what you&apos;re looking for, our team responds within one business day.
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card w-full -space-y-px rounded-2xl border border-border"
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x first:rounded-t-2xl first:border-t last:rounded-b-2xl last:border-b"
					>
						<AccordionTrigger className="px-6 py-4 text-base font-medium leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-6 text-sm md:text-base">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<p className="text-muted-foreground text-center text-sm md:text-base">
				Still have questions?{' '}
				<a href="#" className="text-primary hover:underline font-medium">
					Talk to our deployment team
				</a>
			</p>
		</div>
	);
}

const questions = [
	{
		id: 'item-1',
		title: 'How does ARES handle unexpected obstacles or human contact on the floor?',
		content:
			'ARES uses a multi-layer safety architecture: 360° LiDAR and 8 stereo cameras for environmental awareness, 6-axis force-torque sensing for contact detection, and a sub-50ms emergency stop certified to ISO 10218-1. When unexpected contact is detected, ARES immediately reduces velocity, evaluates the situation, and halts if the contact persists. It is designed to operate safely in shared human-robot workspaces without physical barriers.',
	},
	{
		id: 'item-2',
		title: 'How long does it take to train ARES on a new task?',
		content:
			'Most tasks can be trained in 4 to 8 hours using our demonstration-based interface — no code required. An operator physically guides ARES through the task once or twice while the onboard AI generalizes the motion. For complex multi-step sequences, our Nexus Studio software allows visual programming that typically adds 2 to 4 hours. Retrained tasks are transferable across your entire fleet instantly.',
	},
	{
		id: 'item-3',
		title: 'What happens if ARES malfunctions mid-shift?',
		content:
			'ARES runs continuous self-diagnostics and will flag degraded performance before it becomes a failure. In the event of an unexpected stop, the unit enters a safe-rest posture, logs a full telemetry snapshot, and alerts your fleet management dashboard in real time. Our standard support contract guarantees a remote diagnosis within 2 hours and an on-site technician within 24 hours. For Enterprise customers, a resident technician is included.',
	},
	{
		id: 'item-4',
		title: 'Does ARES integrate with our existing WMS or ERP system?',
		content:
			'Yes. ARES ships with native connectors for SAP S/4HANA, Oracle SCM, Manhattan Associates, Blue Yonder, and most major WMS platforms via REST API. For proprietary systems, our integration team typically delivers a working connector in 2 to 4 weeks. ARES can receive task assignments, report completion status, and sync inventory data in real time without human intervention.',
	},
	{
		id: 'item-5',
		title: "What's the realistic ROI timeline?",
		content:
			'Based on current deployments, customers operating in logistics and light manufacturing typically reach payback in 14 to 22 months. The primary drivers are labor cost offset, reduction in injury-related downtime, and extended operational hours (ARES runs overnight without supervision costs). Our deployment team provides a detailed ROI model before you sign — built from your specific shift patterns, task mix, and labor costs.',
	},
	{
		id: 'item-6',
		title: 'What does maintenance look like after the first year?',
		content:
			'ARES is designed for a 5-year service interval on major actuators with quarterly preventive maintenance visits included in all support contracts. Wear items such as palm tactile pads and joint seals are field-replaceable by your own technicians after a half-day certification course. Remote firmware and AI model updates are pushed automatically. Year-two and beyond maintenance costs average 8 to 12% of the unit purchase price annually.',
	},
	{
		id: 'item-7',
		title: 'Can our engineering team build custom behaviors on top of ARES?',
		content:
			'Yes. The Nexus Developer SDK provides full access to the motion planning API, sensor data streams, and the task execution framework in Python and C++. We publish a ROS 2 bridge for teams already working in robotics middleware. Enterprise customers receive early access to new SDK features and a dedicated developer support channel. A public documentation portal and community forum are available to all customers.',
	},
];
