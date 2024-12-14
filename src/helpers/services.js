import { Octokit } from "@octokit/core";
import { constants } from "../config/constants";

const { GitHubApiKey } = constants;

export const fetchUserInfo = async (username) => {
    const octokit = new Octokit({
        auth: GitHubApiKey
    })

    console.log(GitHubApiKey);

    const result = await octokit.request('GET /users/{username}', {
        username,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    const { name, bio, twitter_username, location, html_url, avatar_url, login } = result.data;
    return { name, bio, twitter_username, location, html_url, avatar_url, login };
};

