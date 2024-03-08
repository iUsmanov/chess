import { App } from './App/App';
import { StoreProvider } from '../providers/StoreProvider';
import { Suspense, memo } from 'react';
import { ForceUpdateProvider } from '@/shared/render/ForceUpdateProvider/ForceUpdateProvider';

export const RootLayout = memo(() => {
	return (
		<StoreProvider>
			<ForceUpdateProvider>
				<Suspense>
					<App />
				</Suspense>
			</ForceUpdateProvider>
		</StoreProvider>
	);
});
