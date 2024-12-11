
function Header() {
  let auth = localStorage.getItem('user')
  const handleLogout = () => {
    // You will need to call your API for logging out
    console.log("Logout");
  };
  return auth?(
    <div>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
              <a href="" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/admin/theme/images/megamenu-img.png"
                    }
                    alt=""
                    height="30"
                  ></img>
                </span>
                <span className="logo-lg">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/admin/theme/images/megamenu-img.png"
                    }
                    alt=""
                    height="40"
                  ></img>
                </span>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <?php
                      $user_details = Auth::user();
                      if (isset($user_details) && !is_null($user_details->profile_pic)) {
                          $headerImageUrl = asset('uploads/profile_pic/' . $user_details->profile_pic);
                      } else {
                          $headerImageUrl = asset('admin/theme/images/users/avatar-1.jpg');
                      }
                      ?> */}

                <img
                  className="rounded-circle header-profile-user"
                  src={
                    process.env.PUBLIC_URL +
                    "/admin/theme/images/users/avatar-1.jpg"
                  }
                  alt="Header Avatar"
                ></img>
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Demo
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Profile</span>
                </a>
                {/* @if ($user_id == 1)
                          <a className="dropdown-item" href="{{ route('add.company') }}">
                              <i className="feather icon-lock"></i>Change Company
                          </a>
                      @endif */}
                {/* <!-- item--> */}
                {/* {{-- <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
    <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
    <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a> --}}
                      {{-- <div className="dropdown-divider"></div> --}} */}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  ):'';
}
export default Header;
