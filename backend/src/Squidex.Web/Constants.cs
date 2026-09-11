// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Squidex.Infrastructure;
using Squidex.Shared;

namespace Squidex.Web;

public static class Constants
{
    public const string SecurityDefinition = "navadav-oauth-auth";

    public const string ApiSecurityScheme = "API";

    public const string ExternalScheme = "ExternalOidc";

    public const string PrefixApi = "/api";

    public const string PrefixIdentityServer = "/identity-server";

    public const string PrefixSignin = "/signin";

    public const string ScopePermissions = "permissions";

    public const string ScopeProfile = "navadav-profile";

    public const string ScopeRole = "role";

    public const string ScopeApi = "navadav-api";

    public const string ClaimTypeApp = "app/name";

    public const string ClaimTypeRole = "app/role";

    public static readonly string ClientFrontendId = DefaultClients.Frontend;

    public static readonly string ClientInternalId = "navadav-internal";

    public static readonly string ClientInternalSecret = "navadav-internal".ToSha256Base64();
}
