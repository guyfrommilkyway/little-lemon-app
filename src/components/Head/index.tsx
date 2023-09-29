// packages below
import { Helmet } from 'react-helmet-async';

// types below
import { HeadProps } from '@/types';

const Head: React.FC<HeadProps> = (props) => {
	const { title } = props;

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};

export default Head;
