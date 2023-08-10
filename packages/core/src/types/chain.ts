export type Chain = {
	/** ID in number form */
	id: number;
	/** Human-readable name */
	name: string;
	/** Collection of RPC endpoints */
	rpcUrls: {
		[key: string]: string;
		default: string;
		public: string;
	};
};
