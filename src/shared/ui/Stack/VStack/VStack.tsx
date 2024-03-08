import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
	return <Flex {...props} direction='column' />;
};

// От MEMO никакого толка нет, потому что будут чилдрены
