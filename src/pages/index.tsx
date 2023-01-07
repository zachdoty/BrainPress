import Head from "next/head";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

import Flow from "../components/Flow";
import NavBar from "../components/NavBar";

export default function Home() {
    const { data, error, isLoading } = useSWR("/api/canvas", fetcher);

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
                {data && <Flow data={data.data} />}
            </main>
        </div>
    );
}
