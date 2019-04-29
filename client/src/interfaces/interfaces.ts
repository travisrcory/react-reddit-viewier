import {
    PostTypes
} from '../constants/api_constants';

export interface Post {
    kind: PostTypes.Account | PostTypes.Award | PostTypes.Comment | PostTypes.Link | PostTypes.Message | PostTypes.Subreddit
}

export interface MediaEmbed {
}

export interface SecureMediaEmbed {
}

export interface Gildings {
    gid_1: number;
    gid_2: number;
    gid_3: number;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Variants {
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface RootObject {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height: number;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    author_flair_background_color?: any;
    subreddit_type: string;
    ups: number;
    domain: string;
    media_embed: MediaEmbed;
    thumbnail_width: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: any[];
    gildings: Gildings;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    banned_by?: any;
    author_flair_type: string;
    contest_mode: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    media_only: boolean;
    link_flair_template_id?: any;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    visited: boolean;
    num_reports?: any;
    distinguished: string;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    num_crossposts: number;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: any;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    media?: any;
    is_video: boolean;
}

export interface RedditPost {
    kind: PostTypes.Account | PostTypes.Award | PostTypes.Comment | PostTypes.Link | PostTypes.Message | PostTypes.Subreddit
    data: RootObject
}
