import { Translation } from "./translation.model";

export class DailyDataset {
    public id:any;
    public dailyDatasetImageId!:any;
    public imageBaseUrl!:string;
    public titleTranslations! :Translation[];
    public shortDescriptionTranslations!:Translation[];
    public longDescriptionTranslations!:Translation[];

    constructor(baseUrl:string,title:Translation[], shortDesc:Translation[],longDesc:Translation[]){
        this.imageBaseUrl = baseUrl;
        this.titleTranslations = title;
        this.shortDescriptionTranslations = shortDesc;
        this.longDescriptionTranslations = longDesc;
    }
}