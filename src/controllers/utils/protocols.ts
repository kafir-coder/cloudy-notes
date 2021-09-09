export interface controller {
	handle(incommingData: IncommingData): Promise<any>;
}

export type IncommingData = {
	data: any;
};
