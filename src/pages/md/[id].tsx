import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

import NavBar from "../../components/NavBar";

export default function MD() {
    const { query } = useRouter();
    const { id } = query;
    const { data, error, isLoading } = useSWR(`/api/md/${id}`, fetcher);

    return (
        <div>
            <Head>
                <title>Obsidian Canvas Viewer</title>
                <meta name="description" content="Obsidian canvas viewer" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar title={data?.active} />
            <main className="h-screen">
                {error && !isLoading && <div>Failed to load</div>}
                {isLoading && <div>Loading...</div>}
                {data && (
                    <div className="p-12">
                        <ReactMarkdown>{data.data}</ReactMarkdown>
                    </div>
                )}
            </main>
        </div>
    );
}
