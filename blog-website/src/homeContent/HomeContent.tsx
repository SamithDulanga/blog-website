import {Banner} from "../banner/Banner.tsx";
import {BlogPage} from "../blogPage/BlogPage.tsx";

export function HomeContent() {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div>
                <BlogPage/>
            </div>

        </div>
    );
}