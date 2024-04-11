import { Listbox as HListbox } from '@headlessui/react';
import { typedMemo } from '@/shared/lib/helpers/typedMemo/typedMemo';
import { ReactNode, useMemo } from 'react';
import cls from './Listbox.module.scss';

interface ListboxProps<T extends string> {
	className?: string;
	selectedValue: T;
	onChange: (value: T) => void;
	options: ListboxOption<T>[];
	label?: ReactNode;
}

export interface ListboxOption<T extends string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

export const Listbox = typedMemo(<T extends string>(props: ListboxProps<T>) => {
	const { className, selectedValue, onChange, options, label } = props;

	const selectedOption = useMemo(() => {
		return options.find((option) => option.value === selectedValue);
	}, [options, selectedValue]);

	return (
		<div className={cls.wrapper}>
			{label}
			<HListbox value={selectedValue} onChange={onChange}>
				<HListbox.Button>{selectedOption?.content}</HListbox.Button>
				<HListbox.Options>
					{options.map((option) => (
						<HListbox.Option key={option.value} value={option.value}>
							{option.content}
						</HListbox.Option>
					))}
				</HListbox.Options>
			</HListbox>
		</div>
	);
});

/* 

import { memo, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

interface ListboxProps {
	className?: string;
}

const people = [
	{ id: 1, name: 'Durward Reynolds', unavailable: false },
	{ id: 2, name: 'Kenton Towne', unavailable: false },
	{ id: 3, name: 'Therese Wunsch', unavailable: false },
	{ id: 4, name: 'Benedict Kessler', unavailable: true },
	{ id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export const Listbox = memo((props: ListboxProps) => {
	const { className } = props;
	const [selectedPerson, setSelectedPerson] = useState(people[0]);

	return (
		<HListbox value={selectedPerson} onChange={setSelectedPerson}>
			<HListbox.Button>{selectedPerson.name}</HListbox.Button>
			<HListbox.Options>
				{people.map((person) => (
					<HListbox.Option key={person.id} value={person} disabled={person.unavailable}>
						{person.name}
					</HListbox.Option>
				))}
			</HListbox.Options>
		</HListbox>
	);
});


*/
