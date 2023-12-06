import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
const netsubscription = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          // cant find the source for the orignal image
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
          // backgroundColor: 'red',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            height: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '130px',
            textAlign: 'left',
          }}
        >
          <h1 style={{ zIndex: '2', marginBottom: '20px' }}>
            Glow IPS Tally ERP.9 Sales & Service Partner Delhi
          </h1>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Glow IPS Tally ERP.9 Rental
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>
      {/* form */}
      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center flex-flow-row-reverse">
            <div className="col-md-4">
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Tally ERP 9
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1"
                      className="collapse ps-3"
                      data-bs-parent="#accordion"
                      style={{}}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse1"
                              href="#collapse1_1"
                              aria-expanded="false"
                              className="collapsed"
                            >
                              Functions &amp; Features
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse1_1"
                          className="collapse ps-3"
                          data-bs-parent="#collapse1"
                          style={{}}
                        >
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Accounting-glowips-delhi.php"
                                className="collapsed"
                              >
                                Accounting
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Financial-Management-Control-glowips-delhi.php"
                                className="collapsed"
                              >
                                Financial Management &amp; Control
                              </a>
                            </h6>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_1"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Inventory
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_1"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Inventory-Accounting-Management-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Inventory Accounting &amp; Management
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Batch-Vouchers-Report-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Batch Vouchers Report
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_2"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Purchases &amp; Payables
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_2"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Stock-Query-From-Invoice-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Stock Query From Invoice
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_3"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Sales &amp; Receivables
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_3"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Stock-Query-From-Invoice-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Stock Query from Invoice
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Sales-&-Receivables-Mass-Emailing-Communicating-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Mass Emailing - Communicating
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Point-of-Sale-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Point of Sale
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Manufacturing-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Manufacturing{' '}
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Costing-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Costing{' '}
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Job-Costing-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Job Costing{' '}
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Payroll-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Payroll{' '}
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Branch-Management-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Branch Management{' '}
                              </a>
                            </h6>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_4"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Data Synchronisation
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_4"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="One-way-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  One way Synchronisation
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Selective-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Selective Synchronisation
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Synchronisation-After-Save-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Synchronisation After Save
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multiple-Rule-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multiple Rule Synchronisation
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="EnterpriseandBeyond-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Enterprise and Beyond
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Synch-with-Voucher-20Ordering-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Synch with "Voucher Ordering
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Opening-Balance-Control-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Opening Balance Control
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_5"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Statutory Compliance
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_5"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Central-Sales-Tax(CST)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  CST
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Value-Added-Tax-20(VAT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  VAT
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Service-Tax-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Service Tax
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="TaxDeductedatSource(TDS)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  TDS
                                </a>
                              </h6>
                            </div>
                            <div className="card-header ms-3">
                              <h6 className="mb-0">
                                <a
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#collapse1_5"
                                  href="#collapse1_1_6_1"
                                  aria-expanded="false"
                                  className="collapsed"
                                >
                                  Excise for Manufacturers
                                </a>
                              </h6>
                            </div>
                            <div
                              id="collapse1_1_6_1"
                              className="collapse ps-3"
                              data-bs-parent="#collapse1_5"
                              style={{}}
                            >
                              <div className="card-header1">
                                <h6 className="mb-0">
                                  <a
                                    href="Multi-Page-Invoice-Printing-Excise-for-Manufacturers(CENVAT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                    className="collapsed"
                                  >
                                    Multi-Page Invoice Printing
                                  </a>
                                </h6>
                              </div>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Excise%20for%20Dealers-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Excise for Dealers
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="TaxCollectedatSource(TCS)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  TCS
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="FringeBenefitTax(FBT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  FBT
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header ms-3">
                            <h6 className="mb-0">
                              <a
                                data-bs-toggle="collapse"
                                data-bs-parent="#collapse1_1"
                                href="#collapse1_1_7"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                Special Needs
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse1_1_7"
                            className="collapse ps-3"
                            data-bs-parent="#collapse1_1"
                            style={{}}
                          >
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-company-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Company
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Period-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Period
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Cost-Profit%20Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Cost/Profit Centres
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Currency-Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Currency
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Units-Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Units
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Location-Inventory-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  {' '}
                                  Multi-Location Inventory
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multi-Budgets-&-Scenarios-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multi-Budgets &amp; Scenarios
                                </a>
                              </h6>
                            </div>
                            <div className="card-header1">
                              <h6 className="mb-0">
                                <a
                                  href="Multilingual-Special-Needs-tallyerp-9-glowips-delhi.php"
                                  className="collapsed"
                                >
                                  Multilingual
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Security-and-Access-Control-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Security &amp; Access Control
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Remote-Access-Control-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Remote Access
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Remote-Edit-tallyerp-9-glowips-delhi.php"
                                className="collapsed"
                              >
                                Remote Edit
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse1"
                              href="#collapse1_2"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Editions Available
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse1_2"
                          className="collapse"
                          data-bs-parent="#collapse1"
                          style={{}}
                        >
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="silver_Edition_SingleUser-Glowips_delhi.php"
                                className="collapsed"
                              >
                                Silver Edition - Single User
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Gold-Edition-Unlimited-Multi-User-Glowips_delhi.php"
                                className="collapsed"
                              >
                                Gold Edition - Unlimited Multi - User
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Tally_ERP9-Auditors_Edition-Glowips_delhi.php"
                                className="collapsed"
                              >
                                Tally.ERP 9 - Auditors' Edition
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse1"
                              href="#collapse1_3"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Upgrades &amp; Migration
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse1_3"
                          className="collapse"
                          data-bs-parent="#collapse1"
                          style={{}}
                        >
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="Upgrades-Migration-glowips.php"
                                className="collapsed"
                              >
                                Upgrading from prior Versions
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a
                                href="MigratingfromotherProducts-glowips.php"
                                className="collapsed"
                              >
                                Migrating from other Products
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse1"
                              href="#collapse1_4"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Product Roadmap
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse1_4"
                          className="collapse"
                          data-bs-parent="#collapse1"
                          style={{}}
                        >
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a href="#" className="collapsed">
                                Series A
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a href="#" className="collapsed">
                                Series B
                              </a>
                            </h6>
                          </div>
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a href="#" className="collapsed">
                                Series C
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header1">
                            <h6 className="mb-0">
                              <a href="#" className="collapsed">
                                Price List
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#accordion"
                          href="#collapse2"
                          className="collapsed"
                          aria-expanded="false"
                        >
                          Tally .ERP 9 - Auditors' Edition
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse2"
                      className="collapse"
                      data-bs-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Benefits-at-a-glance-about-tally-erp9-Auditor-edition.php"
                            className="collapsed"
                          >
                            Benefits at a glance
                          </a>
                        </h6>
                      </div>
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse2"
                            href="#collapse2_1"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Statutory Audit
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse2_1"
                        className="collapse ms-3"
                        data-bs-parent="#collapse2"
                        style={{}}
                      >
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Data-20Analysis-about-tally-erp9-Auditor-edition.php"
                              className="collapsed"
                            >
                              Data Analysis
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a href="#" className="collapsed">
                              Auditing
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse2"
                            href="#collapse2_2"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Quick Tax Setup
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse2_2"
                        className="collapse ms-3"
                        data-bs-parent="#collapse2"
                        style={{}}
                      >
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Quick-Tax-Setup-Schedule-VI-about-tally-erp9-Auditor-edition.php"
                              className="collapsed"
                            >
                              Schedule VI
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="card-header1 ms-3">
                        <h6 className="mb-0">
                          <a href="" className="collapsed">
                            Schedule a demo
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#accordion"
                          href="#collapse3"
                          className="collapsed"
                          aria-expanded="false"
                        >
                          Tally Shoper 9
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse3"
                      className="collapse"
                      data-bs-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse3"
                            href="#collapse3_1"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Components
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse3_1"
                        className="collapse ms-3"
                        data-bs-parent="#collapse3"
                        style={{}}
                      >
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Shoper9HO-Tally-Shoper-features-details.php"
                              className="collapsed"
                            >
                              Shoper 9 HO
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Shoper9-POS-Distributor-Tally-Shoper-features-details.php"
                              className="collapsed"
                            >
                              Shoper 9 POS/Distributor
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Shoper9-Product%20Editions-Tally-Shoper-features-details.php"
                              className="collapsed"
                            >
                              Shoper 9 - Product Editions
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse3"
                            href="#collapse3_2"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Functionality
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse3_2"
                        className="collapse ms-3"
                        data-bs-parent="#collapse3"
                        style={{}}
                      >
                        <div className="card-header ms-3">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse3_2"
                              href="#collapse3_2_1"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Inventory Management
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse3_2_1"
                          className="collapse ms-3"
                          data-bs-parent="#collapse3_2"
                          style={{}}
                        >
                          <div className="card-header1 ms-3">
                            <h6 className="mb-0">
                              <a
                                href="Stock-Taking-Inventory-Management-Functionality-Tally-Shoper-features-details.php"
                                className="collapsed"
                              >
                                Stock Taking
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header ms-3">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse3_2"
                              href="#collapse3_2_2"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Catalogue Management
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse3_2_2"
                          className="collapse ms-3"
                          data-bs-parent="#collapse3_2"
                          style={{}}
                        >
                          <div className="card-header1 ms-3">
                            <h6 className="mb-0">
                              <a
                                href="Sales-Promotions-Catalogue-Management-Functionality-Tally-Shoper-features-details.php"
                                className="collapsed"
                              >
                                Sales Promotions
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header ms-3">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse3_2"
                              href="#collapse3_2_3"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Configurability
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse3_2_3"
                          className="collapse ms-3"
                          data-bs-parent="#collapse3_2"
                          style={{}}
                        >
                          <div className="card-header1 ms-3">
                            <h6 className="mb-0">
                              <a
                                href="Configurability-Functionality-Tally-Shoper-features-details.php"
                                className="collapsed"
                              >
                                Tally.ERP 9 Interface
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header ms-3">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse3_2"
                              href="#collapse3_2_4"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Flow of Goods and Information
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse3_2_4"
                          className="collapse ms-3"
                          data-bs-parent="#collapse3_2"
                          style={{}}
                        >
                          <div className="card-header1 ms-3">
                            <h6 className="mb-0">
                              <a
                                href="Comprehensive-Data-Synchronisation-Data-FlowofGoodsandInformation-Functionality-Tally-Shoper-features-details.php"
                                className="collapsed"
                              >
                                Comprehensive Data Synchronisation
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="card-header ms-3">
                          <h6 className="mb-0">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-parent="#collapse3_2"
                              href="#collapse3_2_5"
                              className="collapsed"
                              aria-expanded="false"
                            >
                              Management Reports
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapse3_2_5"
                          className="collapse ms-3"
                          data-bs-parent="#collapse3_2"
                          style={{}}
                        >
                          <div className="card-header1 ms-3">
                            <h6 className="mb-0">
                              <a
                                href="SalesandStockReport-Management-Reports-Functionality-Tally-Shoper-features-details.php"
                                className="collapsed"
                              >
                                Sales and Stock Report
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse3"
                            href="#collapse3_3"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Technology
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse3_3"
                        className="collapse ms-3"
                        data-bs-parent="#collapse3"
                        style={{}}
                      >
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Hardware_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              Hardware
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="DevicesSupported_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              {' '}
                              Devices Supported
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Architecture_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              Architecture
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Customization of Shoper 9_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              Customisation
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Shoper 9 Interfaces_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              {' '}
                              Interfaces
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Store Templates_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              {' '}
                              Store Templates
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Custom Installer_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              {' '}
                              Custom Installer
                            </a>
                          </h6>
                        </div>
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Live Update_Tally_Technology_tally_shoper.php"
                              className="collapsed"
                            >
                              {' '}
                              Live Update
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#accordion"
                          href="#collapse4"
                          className="collapsed"
                          aria-expanded="false"
                        >
                          Tally Developer
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse4"
                      className="collapse"
                      data-bs-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-header1 ms-3">
                        <h6 className="mb-0">
                          <a
                            href="The%20Development%20PlatformTDL_tally_developer.php"
                            className="collapsed"
                          >
                            Tally Developer - TDL
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1 ms-3">
                        <h6 className="mb-0">
                          <a
                            href="The%20Development%20PlatformTDL_tally_developer.php"
                            className="collapsed"
                          >
                            The Development Platform
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="tally-erp9-software-on-rent.php"
                          className="collapsed"
                        >
                          Tally ERP-9 Rental
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="tally-erp9-software-quotation.php"
                          className="collapsed"
                        >
                          Our Quotation
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  {/*<div class="card-header1">*/}
                  {/*  <h6 class="mb-0">*/}
                  {/*    <a href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Customization-Solution-Delhi-India-International.php"
                        className="collapsed"
                      >
                        Customization Services
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Corporate-Training-Unit-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        Tally Corporate Training
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Subscription-Renewal-Services-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        Tally.Net Services
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-ERP-Business-Advisory-Services.php"
                        className="collapsed"
                      >
                        Business Advisory Services
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-AMC-Services-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        {' '}
                        Annual Support Cover
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Synchronization-Solutions-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        {' '}
                        Data Synchronization
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Support-Unit-Delhi-Ncr-India-International.php"
                        className="collapsed"
                      >
                        Priority Tally Support
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Useful Links</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a href="Tally-Solutions-Unit.php" className="collapsed">
                        Tally Academy Solution
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Corporate-Management-Services-India-International.php"
                        className="collapsed"
                      >
                        Corporate Management
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Vertical-Solutions-Authorized-Development-Unit.php"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Integration-Services-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        Tally Integration
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="glowips-tallyerp-9-customers.php"
                        className="collapsed"
                      >
                        Our Esteemed Clientage
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a href="instantsupport.php" className="collapsed">
                        Instant Support
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Ask for a service</h4>
                <div className="tabArea">
                  <form
                    id="contact-form"
                    className="row"
                    method="post"
                    action=""
                    noValidate={true}
                  >
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        required={true}
                        data-error="Name is required."
                      />
                    </div>
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="Mobile No."
                        required={true}
                        data-error="Mobile is required."
                      />
                    </div>
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="Email"
                        required={true}
                        data-error="Email is required."
                      />
                    </div>
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="City"
                        required={true}
                        data-error="City is required."
                      />
                    </div>
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="Message"
                        required={true}
                        data-error="Message is required."
                      />
                    </div>
                    <div className="col-md-12 text-center mt-4 mb-3">
                      <button className="btn">
                        <span>Send Messages</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>{' '}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="section-title">
                <h2 className="title">Tally.NET Service</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>What is Tally.NET?</p>
                      </div>
                      <div className="row justify-content-center align-items-start">
                        <div className="col-md-12">
                          <p>
                            Tally.ERP 9 provides a new capability Tally.NET
                            which is available by default. Tally.NET is a
                            framework which works in the background and provides
                            a broad range of services using the Internet.
                          </p>
                          <p></p>
                          <p>
                            Using Tally.NET the user can access the company's
                            data from a remote location using another instance
                            of Tally.ERP 9; similarly a practicing Chartered
                            Accountant working with Tally.ERP 9 Auditor's
                            License can scrutinize the client's Tally.ERP 9 data
                            remotely from the office.
                          </p>
                          <p></p>
                          <p>
                            At the client's place the system administrator has
                            to create remote users with the permission to access
                            or audit data from a remote location and assign
                            controls based on their security level for the
                            required company only. The remote user accessing the
                            company data acts as clients to Tally.NET.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <img
                            src="assets/images/tally.net_glowips_delhi.jpg"
                            alt=""
                            width="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Features of Tally.NET :</p>
                      </div>
                      <div className="row justify-content-center align-items-start">
                        <div className="col-md-12">
                          <p>
                            Tally.NET is a default feature available in the
                            product and provides a host of capabilities.
                            Following is a list of capabilities available in
                            Tally.ERP 9.
                          </p>
                          <p />
                        </div>
                        <ul className="ms-5">
                          <li>Connect companies from Tally.ERP 9.</li>
                          <li>Create and maintain Remote Users.</li>
                          <li>
                            Remote availability of Auditors Edition of Tally.ERP
                            9 License.
                          </li>
                          <li>Synchronization of data (via Tally.NET).</li>
                          <li>
                            Remote access of data by any user (including BAP
                            users).
                          </li>
                          <li>
                            Use online help and support capability from within
                            Tally or the browser.
                          </li>
                          <li>
                            Support Centre to get instant access for support on
                            functional and technical areas related to the
                            product.
                          </li>
                          <li>
                            Control Centre to manage and centrally configure
                            sites across locations.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default netsubscription
