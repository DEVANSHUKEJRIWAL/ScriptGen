"use client"
import React,{useState, useEffect} from "react";
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates'; // Adjust this import based on your actual file structure
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { AIOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';


interface Props {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: Props) {
    {/* @ts-ignore */ }
    
    const selectedTemplate: TEMPLATE | undefined = Templates.find((item) => item.slug === props.params['template-slug']);
    const [loading, setLoading] = React.useState(false);

    const [aiOutput, setAiOutput] = React.useState<string>('');
    const { user } = useUser();
    const [historyData, setHistoryData] = useState([]);
    const GenerateAIContent = async (formData: any) => {
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);

        console.log(result.response.text());
        setAiOutput(result?.response.text());
        await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
        setLoading(false);

    }

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiOutput,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: new Date().toISOString(),
        });
        console.log(result);
    }
    


    return (
        <div className='p-10'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;