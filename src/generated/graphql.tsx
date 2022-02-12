import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A project tech stack */
  Stack: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  createUser: User;
  createWorkItem: WorkItem;
  deleteProject: Scalars['Boolean'];
  updateProject: Project;
  updateUser: User;
};


export type MutationCreateProjectArgs = {
  adminKey: Scalars['String'];
  input: NewProjectInput;
};


export type MutationCreateUserArgs = {
  adminKey: Scalars['String'];
  input: NewUserInput;
};


export type MutationCreateWorkItemArgs = {
  adminKey: Scalars['String'];
  input: WorkItemInput;
};


export type MutationDeleteProjectArgs = {
  _id: Scalars['String'];
  adminKey: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  adminKey: Scalars['String'];
  input: UpdateProjectInput;
};


export type MutationUpdateUserArgs = {
  adminKey: Scalars['String'];
  input: UpdateUserInput;
};

export type NewProjectInput = {
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoFile: Scalars['Upload'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type NewUserInput = {
  bio: Scalars['String'];
  email: Scalars['String'];
  githubLink: Scalars['String'];
  linkedInLink: Scalars['String'];
  photoFile: Scalars['Upload'];
  preBio?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  endDate?: Maybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoURL: Scalars['String'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  project: Project;
  projects: Array<Project>;
  user: UserResponse;
  workItems: Array<WorkItem>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type UpdateProjectInput = {
  _id: Scalars['String'];
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoFile?: InputMaybe<Scalars['Upload']>;
  photoURL: Scalars['String'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  _id: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  githubLink: Scalars['String'];
  linkedInLink: Scalars['String'];
  photoFile?: InputMaybe<Scalars['Upload']>;
  photoURL: Scalars['String'];
  preBio?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  githubLink: Scalars['String'];
  linkedInLink: Scalars['String'];
  photoURL: Scalars['String'];
  preBio: Scalars['String'];
  s3Key: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  latestRelease?: Maybe<Project>;
  user?: Maybe<User>;
};

export type WorkItem = {
  __typename?: 'WorkItem';
  _id?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  description: Array<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  location: Scalars['String'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type WorkItemInput = {
  _id?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  description: Array<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  location: Scalars['String'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type CreateProjectMutationVariables = Exact<{
  input: NewProjectInput;
  adminKey: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', title: string, photoURL: string } };

export type CreateUserMutationVariables = Exact<{
  input: NewUserInput;
  adminKey: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', title: string } };

export type CreateWorkItemMutationVariables = Exact<{
  input: WorkItemInput;
  adminKey: Scalars['String'];
}>;


export type CreateWorkItemMutation = { __typename?: 'Mutation', createWorkItem: { __typename?: 'WorkItem', _id?: string | null | undefined, companyName: string, title: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, location: string, description: Array<string> } };

export type DeleteProjectMutationVariables = Exact<{
  _id: Scalars['String'];
  adminKey: Scalars['String'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject: boolean };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
  adminKey: Scalars['String'];
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', _id?: string | null | undefined, title: string, description: string, photoURL: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, repositoryLinks: Array<string>, stack: any } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
  adminKey: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, title: string, photoURL: string, githubLink: string, linkedInLink: string, email: string, preBio: string, bio: string, updatedAt: string } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', _id?: string | null | undefined, title: string, description: string, photoURL: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, repositoryLinks: Array<string>, stack: any }> };

export type UserQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: string, title: string, photoURL: string, githubLink: string, linkedInLink: string, email: string, preBio: string, bio: string, updatedAt: string } | null | undefined, latestRelease?: { __typename?: 'Project', _id?: string | null | undefined, title: string, description: string, photoURL: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, repositoryLinks: Array<string>, stack: any } | null | undefined } };

export type WorkItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkItemsQuery = { __typename?: 'Query', workItems: Array<{ __typename?: 'WorkItem', companyName: string, title: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, location: string, description: Array<string> }> };


export const CreateProjectDocument = gql`
    mutation CreateProject($input: NewProjectInput!, $adminKey: String!) {
  createProject(input: $input, adminKey: $adminKey) {
    title
    photoURL
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: NewUserInput!, $adminKey: String!) {
  createUser(input: $input, adminKey: $adminKey) {
    title
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateWorkItemDocument = gql`
    mutation CreateWorkItem($input: WorkItemInput!, $adminKey: String!) {
  createWorkItem(input: $input, adminKey: $adminKey) {
    _id
    companyName
    title
    startDate
    endDate
    inProgress
    location
    description
  }
}
    `;
export type CreateWorkItemMutationFn = Apollo.MutationFunction<CreateWorkItemMutation, CreateWorkItemMutationVariables>;

/**
 * __useCreateWorkItemMutation__
 *
 * To run a mutation, you first call `useCreateWorkItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkItemMutation, { data, loading, error }] = useCreateWorkItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useCreateWorkItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkItemMutation, CreateWorkItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkItemMutation, CreateWorkItemMutationVariables>(CreateWorkItemDocument, options);
      }
export type CreateWorkItemMutationHookResult = ReturnType<typeof useCreateWorkItemMutation>;
export type CreateWorkItemMutationResult = Apollo.MutationResult<CreateWorkItemMutation>;
export type CreateWorkItemMutationOptions = Apollo.BaseMutationOptions<CreateWorkItemMutation, CreateWorkItemMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($_id: String!, $adminKey: String!) {
  deleteProject(_id: $_id, adminKey: $adminKey)
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($input: UpdateProjectInput!, $adminKey: String!) {
  updateProject(input: $input, adminKey: $adminKey) {
    _id
    title
    description
    photoURL
    description
    startDate
    endDate
    inProgress
    repositoryLinks
    stack
  }
}
    `;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!, $adminKey: String!) {
  updateUser(input: $input, adminKey: $adminKey) {
    _id
    title
    photoURL
    githubLink
    linkedInLink
    email
    preBio
    bio
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      adminKey: // value for 'adminKey'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ProjectsDocument = gql`
    query Projects {
  projects {
    _id
    title
    description
    photoURL
    description
    startDate
    endDate
    inProgress
    repositoryLinks
    stack
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const UserDocument = gql`
    query User($_id: String!) {
  user(_id: $_id) {
    user {
      _id
      title
      photoURL
      githubLink
      linkedInLink
      email
      preBio
      bio
      updatedAt
    }
    latestRelease {
      _id
      title
      description
      photoURL
      description
      startDate
      endDate
      inProgress
      repositoryLinks
      stack
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const WorkItemsDocument = gql`
    query WorkItems {
  workItems {
    companyName
    title
    startDate
    endDate
    inProgress
    location
    description
  }
}
    `;

/**
 * __useWorkItemsQuery__
 *
 * To run a query within a React component, call `useWorkItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkItemsQuery(baseOptions?: Apollo.QueryHookOptions<WorkItemsQuery, WorkItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkItemsQuery, WorkItemsQueryVariables>(WorkItemsDocument, options);
      }
export function useWorkItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkItemsQuery, WorkItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkItemsQuery, WorkItemsQueryVariables>(WorkItemsDocument, options);
        }
export type WorkItemsQueryHookResult = ReturnType<typeof useWorkItemsQuery>;
export type WorkItemsLazyQueryHookResult = ReturnType<typeof useWorkItemsLazyQuery>;
export type WorkItemsQueryResult = Apollo.QueryResult<WorkItemsQuery, WorkItemsQueryVariables>;