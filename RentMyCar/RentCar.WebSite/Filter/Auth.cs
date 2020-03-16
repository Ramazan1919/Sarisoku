using RentCar.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentCar.WebSite.Filter
{
    public class Auth: FilterAttribute, IAuthorizationFilter
    {

        public void OnAuthorization(AuthorizationContext filterContext)
        {
            if (SessionModel.CurrentUser == null)
            {

                filterContext.Result = new RedirectResult("/Login/Index");
            }

        }

    }
}