import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type BookingInputType = {
  eventId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  ticketId: Scalars['ID']['input'];
};

export type BookingType = {
  __typename?: 'BookingType';
  _id: Scalars['ID']['output'];
  event: EventType;
  quantity: Scalars['Int']['output'];
  ticket: TicketType;
  totalPrice: Scalars['Int']['output'];
  user: User;
};

export type Contact = {
  __typename?: 'Contact';
  _id: Scalars['ID']['output'];
  bookingQuery?: Maybe<ContactInfoType>;
  conversation?: Maybe<ContactInfoType>;
  moreInfo?: Maybe<ContactInfoType>;
};

export type ContactInfoInputType = {
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ContactInfoType = {
  __typename?: 'ContactInfoType';
  email?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  label?: Maybe<Scalars['String']['output']>;
};

export type ContactInput = {
  bookingQuery?: InputMaybe<ContactInfoInputType>;
  conversation?: InputMaybe<ContactInfoInputType>;
  moreInfo?: InputMaybe<ContactInfoInputType>;
};

export type EditEventInput = {
  _id: Scalars['ID']['input'];
  banner?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableLayout?: InputMaybe<Scalars['String']['input']>;
  tickets?: InputMaybe<Array<InputMaybe<EditTicketInput>>>;
};

export type EditTicketInput = {
  _id: Scalars['ID']['input'];
  category?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type EventInput = {
  banner: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tableLayout: Scalars['String']['input'];
  tickets?: InputMaybe<Array<InputMaybe<EventTicketInput>>>;
};

export type EventPayload = {
  __typename?: 'EventPayload';
  error?: Maybe<ErrorType>;
  event?: Maybe<EventType>;
};

export type EventTicketInput = {
  category: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type EventType = {
  __typename?: 'EventType';
  _id: Scalars['ID']['output'];
  banner: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tableLayout: Scalars['String']['output'];
  tickets: Array<Maybe<TicketType>>;
};

export type EventsList = {
  __typename?: 'EventsList';
  pastEvents?: Maybe<Array<Maybe<EventType>>>;
  upcomingEvents?: Maybe<Array<Maybe<EventType>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authBasic: UserPayload;
  createBooking?: Maybe<Array<Maybe<BookingType>>>;
  createContact?: Maybe<Contact>;
  createEvent: EventPayload;
  editEVent: EventPayload;
  registerUser: UserPayload;
  verifyUser: UserPayload;
};


export type MutationAuthBasicArgs = {
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateBookingArgs = {
  input: Array<InputMaybe<BookingInputType>>;
};


export type MutationCreateContactArgs = {
  input?: InputMaybe<ContactInput>;
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationEditEVentArgs = {
  input?: InputMaybe<EditEventInput>;
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignupInput>;
};


export type MutationVerifyUserArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getBookings?: Maybe<Array<Maybe<BookingType>>>;
  getContacts?: Maybe<Contact>;
  getEvent?: Maybe<EventType>;
  getEvents?: Maybe<EventsList>;
  me?: Maybe<Scalars['String']['output']>;
};


export type QueryGetEventArgs = {
  id: Scalars['ID']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type TicketType = {
  __typename?: 'TicketType';
  _id: Scalars['ID']['output'];
  availableTickets: Scalars['Int']['output'];
  category: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BookingInputType: BookingInputType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  BookingType: ResolverTypeWrapper<BookingType>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInfoInputType: ContactInfoInputType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ContactInfoType: ResolverTypeWrapper<ContactInfoType>;
  ContactInput: ContactInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  EditEventInput: EditEventInput;
  EditTicketInput: EditTicketInput;
  ErrorType: ResolverTypeWrapper<ErrorType>;
  EventInput: EventInput;
  EventPayload: ResolverTypeWrapper<EventPayload>;
  EventTicketInput: EventTicketInput;
  EventType: ResolverTypeWrapper<EventType>;
  EventsList: ResolverTypeWrapper<EventsList>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  TicketType: ResolverTypeWrapper<TicketType>;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolverTypeWrapper<UserPayload>;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BookingInputType: BookingInputType;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  BookingType: BookingType;
  Contact: Contact;
  ContactInfoInputType: ContactInfoInputType;
  String: Scalars['String']['output'];
  ContactInfoType: ContactInfoType;
  ContactInput: ContactInput;
  Date: Scalars['Date']['output'];
  EditEventInput: EditEventInput;
  EditTicketInput: EditTicketInput;
  ErrorType: ErrorType;
  EventInput: EventInput;
  EventPayload: EventPayload;
  EventTicketInput: EventTicketInput;
  EventType: EventType;
  EventsList: EventsList;
  Mutation: {};
  Query: {};
  SignupInput: SignupInput;
  TicketType: TicketType;
  User: User;
  UserPayload: UserPayload;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean']['output'];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']['input'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String']['input'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BookingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookingType'] = ResolversParentTypes['BookingType']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket?: Resolver<ResolversTypes['TicketType'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookingQuery?: Resolver<Maybe<ResolversTypes['ContactInfoType']>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['ContactInfoType']>, ParentType, ContextType>;
  moreInfo?: Resolver<Maybe<ResolversTypes['ContactInfoType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactInfoType'] = ResolversParentTypes['ContactInfoType']> = {
  email?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventPayload'] = ResolversParentTypes['EventPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  banner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tableLayout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tickets?: Resolver<Array<Maybe<ResolversTypes['TicketType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventsListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsList'] = ResolversParentTypes['EventsList']> = {
  pastEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventType']>>>, ParentType, ContextType>;
  upcomingEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  authBasic?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType, Partial<MutationAuthBasicArgs>>;
  createBooking?: Resolver<Maybe<Array<Maybe<ResolversTypes['BookingType']>>>, ParentType, ContextType, RequireFields<MutationCreateBookingArgs, 'input'>>;
  createContact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, Partial<MutationCreateContactArgs>>;
  createEvent?: Resolver<ResolversTypes['EventPayload'], ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'input'>>;
  editEVent?: Resolver<ResolversTypes['EventPayload'], ParentType, ContextType, Partial<MutationEditEVentArgs>>;
  registerUser?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType, Partial<MutationRegisterUserArgs>>;
  verifyUser?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType, Partial<MutationVerifyUserArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getBookings?: Resolver<Maybe<Array<Maybe<ResolversTypes['BookingType']>>>, ParentType, ContextType>;
  getContacts?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  getEvent?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryGetEventArgs, 'id'>>;
  getEvents?: Resolver<Maybe<ResolversTypes['EventsList']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type TicketTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketType'] = ResolversParentTypes['TicketType']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BookingType?: BookingTypeResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  ContactInfoType?: ContactInfoTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ErrorType?: ErrorTypeResolvers<ContextType>;
  EventPayload?: EventPayloadResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  EventsList?: EventsListResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TicketType?: TicketTypeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';