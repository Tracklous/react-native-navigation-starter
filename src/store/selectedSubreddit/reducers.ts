import {
    SELECT_SUBREDDIT,
} from './actions';
import {
    SelectedSubredditAction,
    SelectedSubredditState,
} from './types';

const initialState: SelectedSubredditState = '';

const selectedSubreddit = (
    state = initialState,
    action: SelectedSubredditAction,
) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

export default selectedSubreddit;